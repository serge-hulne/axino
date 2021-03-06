

class Channel {
        id: string;
        value: any;

        constructor(id: string) {
            this.id = id;
            this.value = null;
        }

        send(value:any)  {
            this.value = value;
            var event = new CustomEvent(this.id, {
                detail: {
                    value: value
                }
            });
            document.dispatchEvent(event);
        }
        
        listen(callback:any) {
            document.addEventListener(this.id, callback);
        }

}

export  {
    Channel
}