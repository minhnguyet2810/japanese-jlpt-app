import { create } from 'zustand';
import { persist, createJSONStorage, type StateStorage } from 'zustand/middleware';
import type { JLPTLevel, VocabItem, UserProgress } from '../types/japanese';
import { mockVocab } from '../data/mockVocab';

type SelectedLevel = JLPTLevel | 'all';

export type LearningFilterTag = 'daily' | 'study' | 'shopping' | 'time' | 'people' | 'home' | 'transport' | 'food' | 'school' | string;

interface JapaneseState {
  vocab: VocabItem[];
  selectedLevel: SelectedLevel;
  selectedTags: LearningFilterTag[];
  userProgress: Record<string, UserProgress>;

  setSelectedLevel: (level: SelectedLevel) => void;
  toggleTag: (tag: LearningFilterTag) => void;
  clearTags: () => void;

  getFilteredVocab: () => VocabItem[];

  updateProgress: (vocabId: string, updater: (prev: UserProgress | undefined) => UserProgress) => void;
}

// Helper to determine if running on client (Next.js SSR safety)
const isClient = typeof window !== 'undefined';

// No-op storage for SSR (createJSONStorage requires StateStorage, not undefined)
const noopStorage: StateStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};
// Custom storage to revive Date in UserProgress.nextReview
const japaneseStorage = createJSONStorage<JapaneseState>(() =>
  isClient ? window.localStorage : noopStorage
);

export const useJapaneseStore = create<JapaneseState>()(
  persist(
    (set, get) => ({
      vocab: mockVocab,
      selectedLevel: 'all',
      selectedTags: [],
      userProgress: {},

      setSelectedLevel: (level) => set({ selectedLevel: level }),

      toggleTag: (tag) =>
        set((state) => {
          const exists = state.selectedTags.includes(tag);
          return {
            selectedTags: exists
              ? state.selectedTags.filter((t) => t !== tag)
              : [...state.selectedTags, tag],
          };
        }),

      clearTags: () => set({ selectedTags: [] }),

      getFilteredVocab: () => {
        const { vocab, selectedLevel, selectedTags } = get();
        return vocab.filter((item) => {
          const levelOk = selectedLevel === 'all' || item.level === selectedLevel;
          const tagsOk =
            selectedTags.length === 0 ||
            selectedTags.every((tag) => item.tags.includes(tag));
          return levelOk && tagsOk;
        });
      },

      updateProgress: (vocabId, updater) =>
        set((state) => {
          const prev = state.userProgress[vocabId];
          const next = updater(prev);
          return {
            userProgress: {
              ...state.userProgress,
              [vocabId]: next,
            },
          };
        }),
    }),
    {
      name: 'japanese-learning-store',
      storage: japaneseStorage,
      // Chỉ lưu những trạng thái liên quan đến tiến trình và bộ lọc, vocab có thể load từ file
      partialize: (state) => ({
        selectedLevel: state.selectedLevel,
        selectedTags: state.selectedTags,
        userProgress: state.userProgress,
      }),
    }
  )
);

