// store.js
import {create} from 'zustand';
import data from './data/GameItems.json';

const characters = data.Characters;
const rooms = data.Rooms;
const weapons = data.Weapons;
const victim = data.Victim.name;

const useStore = create(set => ({
  popUp: true,
  dialog: false,
  actionMenu: false,
  showNotepad: false,
  notepadBtn: 'Open',
  roomsList: false,
  gameStarted: false,
  msVictim: `${victim}`,
  msChar: '',
  msRoom: '',
  msWeapon: '',
  playerRoom: '',
  characterRoomTracker: {
    'Foyer': [],
    'Dining Room': [],
    'Kitchen': [],
    'Art Studio': [],
    'Library': [],
    'Living Room': [],
    'Master Bedroom': []
  },
  togglePopUp: () => set(state => ({ popUp: !state.popUp })),
  toggleDialog: () => set(state => ({ dialog: !state.dialog })),
  toggleActionMenu: () => set(state => ({ actionMenu: !state.actionMenu })),
  toggleNotepad: () => set(value => ({ notepad: value })),
  toggleRoomsList: () => set(state => ({ roomsList: !state.roomsList })),
  setGameStart: value => set({ gameStarted: value }),
  setMsChar: value => set({ msChar: value }),
  setMsRoom: value => set({ msRoom: value }),
  setMsWeapon: value => set({ msWeapon: value }),
  setPlayerRoom: value => set(({ playerRoom: value })),
}));

export default useStore;
