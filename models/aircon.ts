import { BaseDevice } from './device';
import { OnOffState } from './states/onoff';
import { FanSpeed } from './states/fanspeed';
import { Thermostat, ThermostatMode } from './states/thermostat';

export type AirconDevice = BaseDevice & Thermostat & FanSpeed & {
    type: 'aircon';
    state: OnOffState;    
};
