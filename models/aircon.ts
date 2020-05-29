import { BaseDevice } from './device';
import { OnOffState } from './states/onoff';
import { FanState } from './states/fan';
import { Thermostat, ThermostatMode } from './states/thermostat';

export type AirconDevice = BaseDevice & {
    type: 'aircon';
    state: OnOffState & FanState & Thermostat;

    availableFanSpeeds: [];
    reversible: false;
    supportsFanSpeedPercent: false;
    commandOnlyFanSpeed: false;

    availableModes: ThermostatMode[];
    temperatureUnit: 'C' | 'F';
    bufferRangeCelsius?: number;
    commandOnlyTemperatureSetting?: false;
    queryOnlyTemperatureSetting?: false;


}