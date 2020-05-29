import { BaseDevice } from './device';
import { OnOffState } from './states/onoff';
import { FanState } from './states/fan';

export type FanDevice = BaseDevice & {
    type: 'fan';
    state: FanState & OnOffState;

    availableFanSpeeds: [];
    reversible: false;
    supportsFanSpeedPercent: false;
    commandOnlyFanSpeed: false;

};