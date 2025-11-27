export type Vector2 = {
    x: number;
    y: number;
};

export interface GameEntity {
    position: Vector2;
    velocity: Vector2;
    update(deltaTime: number): void;
    render(): void;
}

export interface Car extends GameEntity {
    speed: number;
    accelerate(amount: number): void;
    brake(amount: number): void;
    turn(angle: number): void;
}

export interface AIDriver extends GameEntity {
    intelligenceLevel: number;
    makeDecision(): void;
}

export interface Scene {
    preload(): void;
    create(): void;
    update(deltaTime: number): void;
    render(): void;
}

export interface HUD {
    update(speed: number, lapTime: number, position: number): void;
    render(): void;
}

export interface AudioManager {
    playSound(soundId: string): void;
    stopSound(soundId: string): void;
    setVolume(volume: number): void;
}