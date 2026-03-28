# Historique des Versions - ReptileTrack

## [v2.7.0] - 2026-03-28
### Ajouté
- **Page Bilan Dédiée :** Centralisation complète des finances, coûts énergétiques par habitat et projections de PV.
- **Suivi des Investissements (Habitats) :** Saisie des prix d'achat et de revente pour les terrariums.
- **Bilan Financier Global :** Déplacement du bilan complexe du Dashboard vers la page Bilan.
- **Inputs de Finance (Animaux) :** Ajout des champs de transaction dans l'onglet Entrée.
- **Icônes Financières :** Intégration de l'icône Euro dans toutes les vues monétaires.

## [v2.6.0] - 2026-03-28
### Ajouté
- **Avancées Taxonomiques :** Intégration des notions de Famille et Sous-Famille dans le profil biologique.
- **Base de données Espèces :** Ajout du *Gastropholis prasina* et auto-complétion taxonomique.
- **Fiche PDF Officielle :** Inclusion des données biologiques détaillées dans l'export officiel.

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
