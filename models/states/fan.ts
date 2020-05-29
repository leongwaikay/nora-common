import { State } from './state';

export interface FanState extends State {
    currentFanSpeedSetting: string;
}