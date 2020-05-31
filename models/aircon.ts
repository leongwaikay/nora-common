import { BaseDevice } from './device';
import { FanState } from './states/fan';
import { OnOffState } from './states/onoff';
import { Thermostat, ThermostatMode } from './states/thermostat';

export type AirconDevice = BaseDevice & {
    type: 'aircon';
    state: OnOffState & FanState & Thermostat;

    availableFanSpeeds: [['low']];
    reversible: false;
    supportsFanSpeedPercent: false;
    commandOnlyFanSpeed: false;

    availableModes: ThermostatMode[];
    temperatureUnit: 'C' | 'F';
    bufferRangeCelsius?: number;
    commandOnlyTemperatureSetting?: false;
    queryOnlyTemperatureSetting?: false;
};
