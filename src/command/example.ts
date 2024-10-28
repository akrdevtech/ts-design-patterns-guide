import { Light, LightOnCommand, LightOffCommand, RemoteControl } from './command';

function main() {
    const light = new Light();
    const lightOn = new LightOnCommand(light);
    const lightOff = new LightOffCommand(light);

    const remote = new RemoteControl();

    // Turn the light on
    remote.setCommand(lightOn);
    remote.pressButton();

    // Turn the light off
    remote.setCommand(lightOff);
    remote.pressButton();
}

main();

/**
 * 
 * Output
 * 
 * The light is on.
 * The light is off.
 */