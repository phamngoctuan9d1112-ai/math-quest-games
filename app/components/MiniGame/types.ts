export interface MiniGameProps {
    onClose: () => void;
}

export interface HUDProps {
    hp: number;
    coins: number;
}

export interface PauseMenuProps {
    onResume: () => void;
    onExit: () => void;
}