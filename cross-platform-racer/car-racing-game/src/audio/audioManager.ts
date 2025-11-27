import { Howl, Howler } from 'howler';

class AudioManager {
    private sounds: { [key: string]: Howl } = {};

    constructor() {
        this.loadSounds();
    }

    private loadSounds() {
        this.sounds['background'] = new Howl({
            src: ['assets/audio/background.mp3'],
            loop: true,
            volume: 0.5,
        });

        this.sounds['engine'] = new Howl({
            src: ['assets/audio/engine.mp3'],
            volume: 0.7,
        });

        this.sounds['collision'] = new Howl({
            src: ['assets/audio/collision.mp3'],
            volume: 1.0,
        });

        this.sounds['victory'] = new Howl({
            src: ['assets/audio/victory.mp3'],
            volume: 1.0,
        });
    }

    public playSound(soundName: string) {
        const sound = this.sounds[soundName];
        if (sound) {
            sound.play();
        }
    }

    public stopSound(soundName: string) {
        const sound = this.sounds[soundName];
        if (sound) {
            sound.stop();
        }
    }

    public setVolume(soundName: string, volume: number) {
        const sound = this.sounds[soundName];
        if (sound) {
            sound.volume(volume);
        }
    }

    public playBackgroundMusic() {
        this.playSound('background');
    }

    public stopBackgroundMusic() {
        this.stopSound('background');
    }
}

export default new AudioManager();