import { defineConfig, presetUno } from 'unocss'
export default defineConfig({  
  rules: [
    ['text-h1', {
      "font-size": '2rem',
      "line-height": '2.5rem',
      "font-weight": '700',    
      "letter-spacing": '-0.01em',
      "margin-bottom": "1rem" 
    }],
    ['text-h2', {
      "line-height": '2rem',
      "letter-spacing": '-0.01em',
      "font-weight": '700',
      "font-size": '1.5rem',        
    }],
    ['text-blod', {
      "line-height": '1.6rem',
      "letter-spacing": '-0.01em',
      "font-weight": '700',
      "font-size": '1rem',        
    }], 
    ['text-body-1', {
      "line-height": '1.2rem',
      "letter-spacing": '-0.01em',
      "font-weight": '500',
      "font-size": '1rem',        
    }], 
    ['text-body-2', { 
      "line-height": '1rem',
      "letter-spacing": '-0.01em',
      "font-weight": '500',
      "font-size": '.875rem',        
    }],           

    // ['sheet', { 
    //   "background-color": "#eeeeee"   
    // }],               
    // ['background', { 
    //   "background-color": "#f1f2f3"   
    // }],           
  ],
  theme: {
    container: { center: true },
    breakpoints: {
      md: '768px',
      lg: '992px',
      xl: '1104px',
    }
  },
  preflights: [
    {
      getCSS: ({ theme }) => `
        html { font-size: 16px }
        a:hover { color: red }
      `,
    },
  ],
  presets: [presetUno({
    important: true,
    prefix: "tw-"
  })]
})