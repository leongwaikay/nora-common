import { BaseDevice } from './device';
import { FanState } from './states/fan';
import { OnOffState } from './states/onoff';

export type FanDevice = BaseDevice & {
    type: 'fan';
    state: FanState & OnOffState;

    availableFanSpeeds: [];
    reversible: false;
    supportsFanSpeedPercent: false;
    commandOnlyFanSpeed: false;

};
