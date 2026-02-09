# 📊 **Investment Advisor - Asesor de Inversiones**

![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.3.1-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-teal)
![License](https://img.shields.io/badge/License-MIT-green)

Una aplicación web interactiva que proporciona recomendaciones personalizadas de carteras de inversión basadas en el perfil de riesgo del usuario.

## 🚀 **Características**

- ✅ **Cuestionario interactivo** con 5 categorías de evaluación
- ✅ **Algoritmo inteligente** que calcula el perfil de inversión óptimo
- ✅ **Visualizaciones detalladas** de la cartera recomendada
- ✅ **Consejos personalizados** según el perfil del usuario
- ✅ **Diseño responsivo** y moderno con Tailwind CSS
- ✅ **Gráficos interactivos** con Recharts
- ✅ **Iconografía elegante** con Lucide React

## 🏗️ **Tecnologías Utilizadas**

- **Frontend:** React 18 + Vite
- **Estilización:** Tailwind CSS
- **Gráficos:** Recharts
- **Iconos:** Lucide React
- **Build Tool:** Vite
- **PostCSS:** Autoprefixer

## 📁 **Estructura del Proyecto**

```
src/
├── components/
│   ├── QuestionnaireStep.jsx    # Componente de preguntas
│   ├── ResultsDisplay.jsx       # Pantalla de resultados
│   └── PortfolioChart.jsx       # Gráfico de cartera
├── data/
│   ├── questions.js             # Preguntas del cuestionario
│   └── portfolios.js            # Carteras predefinidas
├── utils/
│   └── investmentLogic.js       # Lógica de recomendación
├── App.jsx                      # Componente principal
├── main.jsx                     # Punto de entrada
└── index.css                    # Estilos globales
```

## 🎯 **Cómo Funciona**

### 1. **Evaluación del Perfil**
El usuario responde 5 preguntas clave:
- Tolerancia al Riesgo
- Objetivos de Inversión
- Horizonte Temporal
- Conocimiento Financiero
- Preferencias de Inversión

### 2. **Cálculo de Recomendación**
El algoritmo analiza las respuestas y asigna una puntuación que determina uno de tres perfiles:
- **Conservador** (bajo riesgo)
- **Moderado** (riesgo medio)
- **Agresivo** (alto riesgo)

### 3. **Presentación de Resultados**
- Gráfico circular de distribución de activos
- Tabla detallada de porcentajes
- Consejos personalizados
- Resumen de respuestas

## 🛠️ **Instalación y Uso**

### **Requisitos Previos**
- Node.js 18+ 
- npm 9+

### **Pasos de Instalación**

1. **Clonar el repositorio**
```bash
git clone https://https://github.com/aina-carbonell/investment_advisor
cd investment_advisor
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

### **Construir para Producción**
```bash
npm run build
npm run preview
```

## 📊 **Carteras Disponibles**

### **🏦 Cartera Conservadora**
- **Riesgo:** Bajo
- **Retorno Esperado:** 4-6%
- **Recomendado para:** Preservación de capital

### **⚖️ Cartera Moderada**
- **Riesgo:** Medio
- **Retorno Esperado:** 6-8%
- **Recomendado para:** Crecimiento balanceado

### **🚀 Cartera Agresiva**
- **Riesgo:** Alto
- **Retorno Esperado:** 8-12%
- **Recomendado para:** Máximo crecimiento

## 🎨 **Personalización**

### **Modificar Preguntas**
Edita `src/data/questions.js` para añadir o modificar preguntas:

```javascript
export const questions = [
  {
    id: 'nuevaCategoria',
    title: 'Nueva Categoría',
    question: 'Texto de la pregunta',
    options: [
      { value: 1, label: 'Opción 1' },
      { value: 2, label: 'Opción 2' },
      { value: 3, label: 'Opción 3' }
    ]
  }
];
```

### **Modificar Carteras**
Edita `src/data/portfolios.js` para ajustar las carteras de inversión:

```javascript
export const portfolios = {
  miCartera: {
    name: 'Mi Cartera Personalizada',
    description: 'Descripción de la cartera',
    allocation: [
      { name: 'Activo 1', percentage: 40, color: '#3b82f6' }
    ]
  }
};
```

## 🔧 **Configuración de Desarrollo**

### **Scripts Disponibles**
```json
{
  "dev": "vite",           // Inicia servidor de desarrollo
  "build": "vite build",   // Construye para producción
  "preview": "vite preview" // Previsualiza construcción
}
```

### **Variables de Entorno**
Crea un archivo `.env` en la raíz:
```env
VITE_API_URL=http://localhost:3000
```

## 📱 **Compatibilidad**

- **Navegadores:** Chrome 90+, Firefox 88+, Safari 14+
- **Dispositivos:** Desktop, Tablet, Móvil
- **Sistemas:** Windows, macOS, Linux

## ⚠️ **Aviso Legal**

**Importante:** Esta aplicación es únicamente para fines educativos y demostrativos. No constituye asesoramiento financiero profesional. Siempre consulta con un asesor financiero certificado antes de tomar decisiones de inversión.

## 🤝 **Contribuir**

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 **Licencia**

Este proyecto está libre de licencias y es de libre acceso para uso personal siempre y cuando se cite al origen y al autor :).

## 👨‍💻 **Autor**

**Aina Carbonell Fusté** - [GitHub Profile](https://github.com/https://github.com/aina-carbonell)

**Última Actualización:** Febrero 2024
