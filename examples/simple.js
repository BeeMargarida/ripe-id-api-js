const ripe = require("..");

async function run() {
    const api = new ripe.API();
    console.info(api.helloAccount());
    console.info(await api.ping());
    console.info(await api.hello());
    console.info(await api.ip());
    console.info(await api.headers());
}

run();
