# Rapport d'Audit UI - Mode Clair (ReptileTrack)

## [CRITIQUE] 🔴 Lisibilité des Textes
- **Inputs Inline :** De nombreux champs (Nom matériel, ID) utilisent `color: #fff` en inline, les rendant blancs sur un fond clair en mode Botanic, donc invisibles.
- **Badges :** Certains badges (Watts, Type) utilisent des `rgba` foncés qui manquent de contraste sur les dégradés clairs.
- **Navigation :** Le contraste entre le lien actif et non-actif est correct, mais la bordure subtile du mode clair peut rendre la séparation latérale trop floue.

## [OPTIMISATION] 🟠 Hiérarchie Visuelle
- **Glassmorphism :** L'effet de flou (backdrop-filter) est moins efficace sur fond clair que sur fond sombre. Il faut augmenter l'ombre portée (box-shadow) pour simuler la profondeur.
- **Titres :** Les `h1` et `h2` manquent parfois de force sur fond clair, une légère ombre portée textuelle (text-shadow) pourrait les ancrer.

## [RECOMMANDATIONS] 🟢 Actions Correctives
1. **Remplacer les couleurs inline par des variables CSS :** Utiliser `var(--text-main)` au lieu de `#fff` partout où c'est possible.
2. **Ajouter une bordure plus marquée en mode clair :** Utiliser `1px solid rgba(0,0,0,0.1)` au lieu de `var(--border-light)` pour les cartes matérielles.
3. **Optimiser les dégradés :** Les dégradés botaniques (`radial-gradient`) sont trop pâles. Il faut des tons plus terreux ou verts profonds pour les zones de focus.

---
*Audit réalisé le 28/03/2026*
