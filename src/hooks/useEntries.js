import { useEffect, useState } from "react";

import {
    getEntries,
    saveEntry,
    deleteEntry
} from '../services/Entries';

const useEntries = (days = 7, category) => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        async function loadEntries() {
            const data = await getEntries();
            setEntries(data);
        }

        loadEntries();
    }, [days, category]);

    return [entries, saveEntry, deleteEntry];
};

export default useEntries;