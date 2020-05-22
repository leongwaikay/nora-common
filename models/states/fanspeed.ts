import { State } from './state';

export interface FanSpeed extends State {
    availableFanSpeeds: 
        {"speeds": [{"speed_name": "s1",
                     "speed_values" : [{
                         "speed_synonym": ["low", "one"],
                         "lang": "en"}]},
                    {"speed_name": "s2",
                    "speed_values" : [{
                        "speed_synonym": ["medium", "two"],
                        "lang": "en"}]},
                    {"speed_name": "s3",
                        "speed_values" : [{
                            "speed_synonym": ["high", "three"],
                            "lang": "en"}]}
                    ],                    
                    "ordered": true
        };    
    reversible: boolean;
    supportsFanSpeedPercent: boolean;
    commandOnlyFanSpeed: boolean;
}
