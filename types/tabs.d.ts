/// <reference path="zotero.d.ts" />
// chrome/content/zotero/tabs.js

declare namespace _ZoteroTypes {
  interface TabInstance {
    id: string;
    type: string;
    title: string;
    data?: any;
    selected?: boolean;
  }
}

declare const Zotero_Tabs: {
  selectedID: string;
  selectedType: string;
  selectedIndex: number;
  deck: Element;
  _tabs: _ZoteroTypes.TabInstance[];

  _getTab(tabId: string): { tab: _ZoteroTypes.TabInstance; tabIndex: number };
  _update(): void;
  getTabIDByItemID(itemID: number): string;
  init(): void;
  getState(): _ZoteroTypes.TabInstance[];
  restoreState(tabs: _ZoteroTypes.TabInstance[]): void;
  add: (options: {
    id?: string;
    type: string;
    title: string;
    data?: any;
    index?: number;
    select?: boolean;
    onClose?: Function;
  }) => { id: string; container: XUL.Box };
  rename(id: string, title: string): void;
  updateLibraryTabIcon(): void;
  close(ids: string | string[]): void;
  closeAll(): void;
  undoClose(): void;
  move(id: string, newIndex: number): void;
  select(id: string, reopening?: boolean, options?: any): void;
  unload(id: string): void;
  unloadUnusedTabs(): void;
  selectPrev(): void;
  selectNext(): void;
  selectLast(): void;
  jump(index: number): void;
  _openMenu(x: number, y: number, id: string): void;
  _updateTabBar(): void;
  _showTabBar(): void;
  _hideTabBar(): void;
};
