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
  gameStatus: 'Pre-Game',
  msVictim: `${victim}`,
  msChar: '',
  msRoom: '',
  msWeapon: '',
  playerRoom: '',
  noteNotes: '',
  roomMenu: false,
  noteSuspects: [],
  noteRooms: [],
  noteWeapons: [],
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
  toggleNotepad: () => set(state => ({ showNotepad: !state.showNotepad })),
  toggleRoomsList: () => set(state => ({ roomsList: !state.roomsList })),
  setGameStatus: value => set({ gameStatus: value }),
  setMsChar: value => set({ msChar: value }),
  setMsRoom: value => set({ msRoom: value }),
  setMsWeapon: value => set({ msWeapon: value }),
  setPlayerRoom: value => set(({ playerRoom: value })),
  setNoteRooms: value => set({ noteRooms: value }),
  setNoteWeapons: value => set({ noteWeapons: value }),
  setNoteSuspects: value => set({ noteSuspects: value }),
  setNoteNotes: value => set({ noteNotes: value }),
  setRoomMenu: state => set({ roomMenu: state }),
}));

export default useStore;
