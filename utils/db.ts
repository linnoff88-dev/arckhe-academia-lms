
const DB_NAME = 'IASemJargoes_DB';
const STORE_NAME = 'artifacts';
const DB_VERSION = 1;

export const initDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = (event) => reject((event.target as IDBOpenDBRequest).error);
  });
};

export const saveArtifact = async (userId: string, lessonId: string, type: 'text' | 'audio' | 'pdf' | 'video_url' | 'infographic', data: any): Promise<void> => {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const key = `${userId}_${lessonId}_${type}`;
      store.put(data, key);
      
      tx.oncomplete = () => resolve();
      tx.onerror = (e) => reject((e.target as IDBTransaction).error);
    });
  } catch (error) {
    console.error("Erro ao salvar artefato:", error);
  }
};

export const getArtifact = async (userId: string, lessonId: string, type: 'text' | 'audio' | 'pdf' | 'video_url' | 'infographic'): Promise<any> => {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const key = `${userId}_${lessonId}_${type}`;
      const request = store.get(key);
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = (e) => reject((e.target as IDBRequest).error);
    });
  } catch (error) {
    console.error("Erro ao recuperar artefato:", error);
    return null;
  }
};
