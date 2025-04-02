// babel.config.js (usando ES Modules)
export default {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }] // 👈 Key para JSX
    ]
};