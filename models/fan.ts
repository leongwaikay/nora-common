import { BaseDevice } from './device';
import { FanState } from './states/fan';
import { OnOffState } from './states/onoff';

export type FanDevice = BaseDevice & {
    type: 'fan';
    state: FanState & OnOffState;

    availableFanSpeeds: {
        'speeds': {
            'speed_name': string,
            'speed_values': [{
                'speed_synonym': string[],
                'lang': 'en'
            }]}[],
        'ordered': true,
    };
    reversible: false;
    supportsFanSpeedPercent: false;
    commandOnlyFanSpeed: false;

};
