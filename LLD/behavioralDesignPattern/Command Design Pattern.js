/* Command interface */
class Command {
    execute() {}
}

// Concrete command for turning a device on
class TurnOnCommand extends Command {
    constructor(device) {
        super();
        this.device = device;
    }

    execute() {
        this.device.turnOn();
    }
}

// Concrete command for turning a device off
class TurnOffCommand extends Command {
    constructor(device) {
        super();
        this.device = device;
    }

    execute() {
        this.device.turnOff();
    }
}

// Concrete command for adjusting the volume of a stereo
class AdjustVolumeCommand extends Command {
    constructor(stereo) {
        super();
        this.stereo = stereo;
    }

    execute() {
        this.stereo.adjustVolume();
    }
}

// Concrete command for changing the channel of a TV
class ChangeChannelCommand extends Command {
    constructor(tv) {
        super();
        this.tv = tv;
    }

    execute() {
        this.tv.changeChannel();
    }
}

// Receiver interface
class Device {
    turnOn() {}
    turnOff() {}
}

// Concrete receiver for a TV
class TV extends Device {
    turnOn() {
        console.log('TV is now on');
    }

    turnOff() {
        console.log('TV is now off');
    }

    changeChannel() {
        console.log('Channel changed');
    }
}

// Concrete receiver for a stereo
class Stereo extends Device {
    turnOn() {
        console.log('Stereo is now on');
    }

    turnOff() {
        console.log('Stereo is now off');
    }

    adjustVolume() {
        console.log('Volume adjusted');
    }
}

// Invoker
class RemoteControl {
    constructor() {
        this.command = null;
    }

    setCommand(command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }
}

// Example usage
(() => {
    // Create devices
    const tv = new TV();
    const stereo = new Stereo();

    // Create command objects
    const turnOnTVCommand = new TurnOnCommand(tv);
    const turnOffTVCommand = new TurnOffCommand(tv);
    const adjustVolumeStereoCommand = new AdjustVolumeCommand(stereo);
    const changeChannelTVCommand = new ChangeChannelCommand(tv);

    // Create remote control
    const remote = new RemoteControl();

    // Set and execute commands
    remote.setCommand(turnOnTVCommand);
    remote.pressButton(); // Outputs: TV is now on

    remote.setCommand(adjustVolumeStereoCommand);
    remote.pressButton(); // Outputs: Volume adjusted

    remote.setCommand(changeChannelTVCommand);
    remote.pressButton(); // Outputs: Channel changed

    remote.setCommand(turnOffTVCommand);
    remote.pressButton(); // Outputs: TV is now off
})();