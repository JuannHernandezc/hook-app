import React from 'react';
import { createRoot } from 'react-dom/client';
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
// import CounterApp from './components/01-useState/CounterApp';

const root = createRoot(document.getElementById('root'));
root.render(
    <CounterWithCustomHook/>
);

