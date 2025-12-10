// Proxy Design Pattern is a structural design pattern where a proxy object acts as a placeholder to control access to the real object. The client communicates with the proxy, which forwards requests to the real object. The proxy can also provide extra functionality such as access control, lazy initialization, logging, and caching.


/* Subject */
class Image {
    display() {
        throw new Error('Method display() must be implemented.');
    }
}

/* RealSubject */
class RealImage extends Image {
    constructor(filename) {
        super();
        this.filename = filename;
        this.loadImageFromDisk();
    }

    loadImageFromDisk() {
        console.log('Loading image: ' + this.filename);
    }

    display() {
        console.log('Displaying image: ' + this.filename);
    }
}

/* Proxy */
class ProxyImage extends Image {
    constructor(filename) {
        super();
        this.realImage = null;
        this.filename = filename;
    }

    display() {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

/* Client code */
(function() {
    const image = new ProxyImage('example.jpg');

    // Image will be loaded from disk only when display() is called
    image.display();

    // Image will not be loaded again, as it has been cached in the Proxy
    image.display();
})();