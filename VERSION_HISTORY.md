# Historique des Versions - ReptileTrack

## [v2.5.0] - 2026-03-28
### Ajouté
- **Système de Marques :** Datalist de marques recommandées (Habistat, Exo Terra, etc.) pour le matériel.
- **Identification visuelle :** Ajout de badges de type d'équipement ([Lampe], [Tapis], [UVB]) dans les vues Terrariums.
- **Labels intelligents :** Formatage dynamique des noms de matériel dans les dropdowns (Type + Marque + Watts).

### Corrigé
- **Blocage UI :** Correction d'un bug CSS (pointer-events) qui empêchait de cliquer sur les inputs et les boutons de suppression.
- **Robustesse :** Fallback pour la génération d'ID (crypto.randomUUID) pour assurer la suppression sur tous les terminaux.
- **Navigation Habitat :** Correction de la visibilité des marques dans la liste des équipements assignés.

---

## [v2.0.0] - 2026-03-27
### Ajouté
- Refonte complète de l'interface (Glassmorphism).
- Gestion multi-habitats.
- Calculateur de coûts énergétiques en temps réel.
- Mode sombre / Mode clair.
