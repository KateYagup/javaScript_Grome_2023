'use: strict'

const callbackPrompt = {
    message: 'Tell me your number',
    showPrompt() {
        const phoneNumber = prompt(this.message);
        // const phoneNumber = prompt(callbackPrompt.message); //аналогичная ссылка на объект
        console.log(phoneNumber);
    },
    showDeferredPrompt(ms) {
        setTimeout(() => this.showPrompt(), ms);
        // setTimeout(callbackPrompt.showPrompt, ms); // аналогичная ссылка
        // setTimeout(this.showPrompt(), ms);
        // setTimeout(this.showPrompt.bind(this), ms)
    }
};

// callbackPrompt.showPrompt();
callbackPrompt.showDeferredPrompt(1000);