# Plan d'Amélioration ReptilTrack V2

Ce plan vise à finaliser la transition vers la V2 en adressant les retours de l'audit récent et en implémentant les fonctionnalités avancées de gestion de cheptel.

## Points à Valider

> [!IMPORTANT]
> - **Gestion Documentaire** : L'implémentation sera simulée (stockage des métadonnées en local) car il n'y a pas de backend pour le stockage de fichiers réels.
> - **PDF** : Nous allons optimiser le mode `print` CSS pour garantir une mise en page "Document Officiel", évitant ainsi l'ajout de lourdes dépendances comme `jspdf`.

## Changements Proposés

### 1. Correction de l'Audit (Quick Wins)

#### [MODIFY] [index.css](file:///c:/Data/Antigravity/projects/reptil-track/src/index.css)
- Améliorer le style des `input[type="date"]` pour correspondre au thème Glassmorphism.
- Ajuster les breakpoints CSS pour les très petits écrans (<320px).
- Ajouter des styles spécifiques `print` pour la fiche d'identification.

#### [MODIFY] [AnimalDetail.jsx](file:///c:/Data/Antigravity/projects/reptil-track/src/pages/AnimalDetail.jsx)
- **AUD-002** : Ajouter des `aria-label` sur tous les boutons d'icônes (Trash, Save, Printer).
- **AUD-001** : Remplacer le placeholder "Coffre-fort" par une interface fonctionnelle d'ajout de métadonnées de documents (Nom du doc, Date, Type).

### 2. Équipements & Stocks (V2+)

#### [MODIFY] [Equipments.jsx](file:///c:/Data/Antigravity/projects/reptil-track/src/pages/Equipments.jsx)
- **Gestion de Stock Numérique** : Introduire un champ "ID/Série" pour chaque unité afin de les distinguer techniquement (ex: Lampe 5W #01 vs #02).
- **Duplication "Modèle"** : Permettre d'ajouter un lot d'équipements identiques plus proprement (Nom + Auto-incrément).

### 3. Fiches Réglementaires & CITES (DDPP)

#### [MODIFY] [AnimalDetail.jsx](file:///c:/Data/Antigravity/projects/reptil-track/src/pages/AnimalDetail.jsx)
- **Codes Source CITES** : Ajouter un sélecteur pour les codes officiels (W, C, F, R) dans l'onglet Réglementaire.
- **Détails Identité** : Valoriser le Surnom ("Nickname") et s'assurer que les dates de naissance sont claires.
- **Gestion Documentaire** : Refondre l'onglet pour qu'il simule mieux un archivage PDF/Image (Icônes dédiées, Type de document clair).
- **Print Template** : Inclure tous les éléments obligatoires pour un contrôle DDPP (Source, Provenance, Marquage).

## Questions Ouvertes

- Souhaitez-vous que la duplication en masse demande le nombre d'exemplaires via un `window.prompt` (simple) ou préférez-vous un champ dédié dans une petite modale ?
- Pour les documents, est-ce suffisant de stocker juste le nom/date ou voulez-vous pouvoir entrer un numéro de référence (ex: N° de Cession) ?

## Plan de Vérification

### Tests Manuels
- Vérifier le rendu responsive à 300px via le simulateur.
- Simuler une impression (Ctrl+P) pour vérifier la mise en page.
- Tester la duplication multiple.
