import { BlindsDevice } from './blinds';
import { GarageDevice } from './garage';
import { LightDevice } from './light';
import { LockDevice } from './lock';
import { OutletDevice } from './outlet';
import { SceneDevice } from './scene';
import { SpeakerDevice } from './speaker';
import { SwitchDevice } from './switch';
import { ThermostatDevice } from './thermostat';
import { FanDevice } from './fan';
import { AirconDevice } from './aircon';

export interface Devices {
    [id: string]: Device;
}

export type Device = SwitchDevice | LightDevice | SceneDevice | OutletDevice | ThermostatDevice |
    SpeakerDevice | BlindsDevice | GarageDevice | LockDevice | FanDevice | AirconDevice;

export type AllStates = Device['state'];

export interface StateChanges {
    [deviceId: string]: Partial<AllStates>;
}
