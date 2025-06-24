# 🚀 Progress Tracker Template

## 📋 Setup Instructions

### 1. Copy Required Files
```bash
# Copy these files to your new project:
- update-progress.js
- .github/workflows/update-progress.yml (optional)
```

### 2. Customize for Your Project

Edit `update-progress.js` and update the `projectPhases` object:

```javascript
const projectPhases = {
  'Phase 1: Your First Phase': {
    total: 10,        // Total features planned
    completed: 5,     // Features completed
    features: [
      '✅ Feature 1',
      '✅ Feature 2', 
      '⏳ Feature 3'
    ]
  },
  // Add more phases...
};
```

### 3. Add to Package.json
```json
{
  "scripts": {
    "progress": "node update-progress.js"
  }
}
```

### 4. README Template

Use this template for your README progress section:

```markdown
## 📊 **Project Progress Dashboard**

![Overall Progress](https://img.shields.io/badge/Overall_Progress-XX%25-orange?style=for-the-badge&logo=progress)
![Current Phase](https://img.shields.io/badge/Current_Phase-Development-blue?style=for-the-badge)

### 🚀 **Development Metrics**

<table align="center">
<tr>
<td align="center"><strong>📈 Progress</strong></td>
<td align="center"><strong>📝 Features</strong></td>
<td align="center"><strong>🧪 Tests</strong></td>
</tr>
<tr>
<td align="center">XX%</td>
<td align="center">X/XX</td>
<td align="center">X/XX</td>
</tr>
</table>

### 📋 **Phase Breakdown**

| Phase | Status | Progress | Features |
|-------|--------|----------|----------|
| **Phase 1** | 🔄 Active | ![](https://geps.dev/progress/XX) | `XX%` (X/XX) |

## 🤖 **Auto-Progress Tracking**

```bash
npm run progress
```
```

### 5. Usage

```bash
# Update progress after completing features
npm run progress

# Or run directly
node update-progress.js
```

## 🎨 Customization Options

### Badge Colors
- `brightgreen` (80-100%)
- `green` (60-79%)
- `yellow` (40-59%)
- `orange` (20-39%)
- `red` (0-19%)

### Progress Bar Styles
- Standard: `![](https://geps.dev/progress/75)`
- With color: `![](https://geps.dev/progress/75?color=green)`
- With text: `![](https://geps.dev/progress/75?text=Progress)`

### Status Emojis
- ✅ Complete
- 🔄 In Progress  
- ⏳ Pending
- 🚀 Priority
- 🔥 Hot
- 💡 Planning

## 🔧 Advanced Features

### Auto-Detection (Future)
```javascript
// Scan codebase for completed features
function autoDetectFeatures() {
  // Check for specific files/patterns
  // Update completion status automatically
}
```

### Git Hooks
```bash
# Add to .git/hooks/pre-commit
#!/bin/sh
node update-progress.js
git add README.md
```

## 📝 Best Practices

1. **Update regularly** - Run after completing features
2. **Be realistic** - Don't inflate completion percentages
3. **Include details** - Use the expandable sections
4. **Visual appeal** - Use emojis and modern badges
5. **Automation** - Set up GitHub Actions for auto-updates

## 🌟 Example Projects

This system works great for:
- Web applications
- Mobile apps
- CLI tools
- Libraries/frameworks
- Documentation projects
- Learning projects

---

**Made with ❤️ for organized developers** 