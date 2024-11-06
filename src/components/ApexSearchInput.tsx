'use client'
import { useState } from "react";
import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from "primereact/autocomplete";

interface ApexSearchInputProps {
    suggestions: string[];
    onChange: (value: string) => void;
}

function ApexSearchInput({ suggestions, onChange }: ApexSearchInputProps) {
    const [value, setValue] = useState('');
    const [items, setItems] = useState<string[]>(suggestions);

    const search = (event: AutoCompleteCompleteEvent) => {
        const _items = suggestions;
        setItems(event.query ? items.filter(item => item.toLowerCase().startsWith(event.query.toLowerCase())) : _items);
    }

    const handleChange = (event: AutoCompleteChangeEvent) => {
        setValue(event.value);
        onChange(event.value);
    }

    return (
        <AutoComplete
            value={value}
            suggestions={items}
            completeMethod={search}
            onChange={handleChange}
            dropdown
            placeholder="Start Typing"
            pt={searchInputPT}
        />
    );
}

const searchInputPT = {
    loadingIcon: {
        className: 'absolute top-4 right-14 text-white'
    }
}

export default ApexSearchInput