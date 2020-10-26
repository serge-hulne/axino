

class Channel {
        id: string;
        value: any;

        constructor(id: string) {
            this.id = id;
            this.value = null;
        }

        send(value)  {
            this.value = value;
            var event = new CustomEvent(this.id, {
                detail: {
                    text: value
                }
            });
            document.dispatchEvent(event);
        }
        
        listen(callback) {
            document.addEventListener(this.id, callback);
        }

}

export  {
    Channel
}