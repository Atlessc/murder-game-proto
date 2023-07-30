// store.js
import { create } from 'zustand';
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
  characterStates: {
    'Ms. Audrey Montague': {
      beingInterviewed: false,
    },
    'Lady Alice Underwood':  {
      beingInterviewed: false,
    },
    'Duke Alfred Parker':  {
      beingInterviewed: false,
    },
    'Miss Daisy Pennington':  {
      beingInterviewed: false,
    },
    'Sir Frederick Caldwell':  {
      beingInterviewed: false,
    },
    'Professor Anna Thorne':  {
      beingInterviewed: false,
    },
    'Madame Lucy Danvers':  {
      beingInterviewed: false,
    },
    'Colonel Henry Kensington':  {
      beingInterviewed: false,
    },
    'Mr. Richard Albright':  {
      beingInterviewed: false,
    },
    'Lord Samuel Carter':  {
      beingInterviewed: false,
    },

  },
  charMoved: 0,
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
  setNoteSuspects: value => set({ noteSuspects:value }),
  setNoteNotes:value=>set({noteNotes:value}),
  setRoomMenu : state=>set({roomMenu : state}),
  setCharMoved: value => set({ charMoved: value })
}));

export default useStore;
