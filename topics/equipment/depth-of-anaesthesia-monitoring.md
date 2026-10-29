---
title: Depth of Anaesthesia Monitoring
area: equipment
status: verified
verified_on: 2026-10-29
origin: owner-notes
aliases: [BIS, Bispectral Index, processed EEG, pEEG, DoA monitoring, Sedline, PSI, Entropy, NARCOguide, Guedel stages, isolated forearm technique]
related: [physiology/eeg-spectral-analysis, other/intraoperative-awareness, comorbidities/postoperative-delirium, drugs/propofol, procedures/tiva]
sources: [AAGBI]
tags: [monitoring, bis, eeg, awareness, depth-of-anaesthesia]
---

# Depth of Anaesthesia Monitoring

Clinical signs, Guedel's stages, the isolated forearm technique and processed EEG indices (BIS, PSI, entropy) used to judge anaesthetic depth.

## Uses
- Preventing awareness
  - TIVA with paralysis
  - IV drug abusers
  - Haemodynamic instability, caesarean section (LSCS), major trauma
- Preventing excessive depth
  - Postoperative delirium
  - Haemodynamic instability

## Limitations
- Inaccuracy: confounded by EMG
- Lag time: processing delay of about 30 seconds between a change in brain state and the display

## Clinical signs
- Grimacing
- Movement
- BP and HR trends (hypertension, tachycardia)
- End-tidal anaesthetic agent concentration

## Guedel's stages of anaesthesia
- A way of assessing depth of general anaesthesia
- Described for ether as the sole agent; seen with ether because of its slow induction
- Pitfalls
  - Ether is no longer used
  - Does not account for IV anaesthetics
  - Neuromuscular blockers suppress the signs (most rely on muscle movement)

### Stage I: analgesia or disorientation
- From start of administration to loss of consciousness ("induction stage"); may begin in the holding area after premedication
- Sedation, analgesia (pain still felt), then amnesia; patient can still talk
- Eyelash reflex intact
- Breathing slow and regular
- Ends with loss of consciousness

### Stage II: excitement or delirium
- From loss of consciousness to regular spontaneous breathing
- Delirium, disinhibition, uncontrolled movement or struggling
  - Hypertension and tachycardia common
- Eyelash reflex lost, other reflexes intact; divergent gaze, dilated pupils
- Airway reflexes intact and often hypersensitive: laryngospasm or bronchospasm
  - Avoid airway manipulation here (inserting or removing an ETT, deep suction)
  - Coughing, bucking
- Irregular breathing with breath-holding
- Vomiting
- Fast-acting agents shorten the time spent in stage II

### Stage III: surgical anaesthesia
- From regular spontaneous breathing to respiratory paralysis
- Target level for surgery; safe to intubate without neuromuscular blockers
- Regular spontaneous breathing, central gaze (depends on plane), muscle relaxation, no somatic or autonomic response to stimulation, respiratory depression
- Four planes:
  - Plane I (light): regular breathing until eyeball movement stops
    - Constricted pupils
    - Eyelid and conjunctival reflexes lost
    - Divergent gaze, fixed eccentric eye position; eye muscles become less active
  - Plane II: from cessation of eyeball movement to start of intercostal paralysis
    - Central gaze, no eyeball movement
    - Increased lacrimation; corneal reflex lost
    - Laryngeal reflex lost
    - No movement or deep breathing in response to skin stimulation
  - Plane III: from start to completion of intercostal paralysis
    - Progressive intercostal paralysis; diaphragmatic breathing continues
    - Skeletal muscle relaxation: the target plane for surgery before muscle relaxants
    - Dilated pupils, light reflex lost
    - Hypotension may occur
  - Plane IV: from complete intercostal paralysis to diaphragmatic paralysis (apnoea)
    - Shallow breathing, paradoxical ribcage movement
    - Worsening hypotension

### Stage IV: overdose
- From cessation of breathing to death
- Severe medullary depression: apnoea and vasomotor collapse; fatal without support
- Pupils fixed and widely dilated; muscles flaccid

## Isolated forearm technique
- First described by Tunstall in obstetric anaesthesia
- Upper-arm tourniquet inflated above systolic pressure before giving the muscle relaxant
- Arm movement (spontaneous or to command) shows wakefulness, not necessarily explicit awareness
- Tourniquet released at 15 - 20 minutes; reinflate if more relaxant is needed
- Responding to command may be a late sign; not all responders have recall
- Evidence
  - BIS-guided deep sedation study: 56 patients asked repeatedly to squeeze a hand; 37 clearly responded; only 9 had explicit recall. Patient recall underestimates wakefulness
  - 1986 study (etomidate versus nitrous oxide and fentanyl): 44% of the nitrous oxide group showed wakefulness

## Processed EEG: general points
- Measures cortical electrical activity to gauge depth and help prevent awareness
- Uses
  - Assess awareness risk under sedation or anaesthesia
  - Titrate hypnotics to the individual, avoiding under- and overdosing
    - Helpful in high-risk patients whose haemodynamic instability prevents deep anaesthesia
  - Monitor depth of sedation
- Reflects the hypnotic component; less sensitive to the analgesic (opioid) component
- AAGBI: looking at the raw EEG trace and EMG activity is likely to improve the usefulness of processed EEG

## Bispectral index (BIS)
- Continuous measure of hypnosis from most common sedative-hypnotics
- An adjunct to clinical signs; do not manage anaesthesia on BIS alone

### How it works
- Processed EEG: weighted sum of several EEG sub-parameters
  - Proprietary, empirically derived algorithm from healthy adults repeatedly moved between consciousness and unconsciousness on several regimens
  - Core component is bispectral analysis: phase relationships in the frontal EEG signal
  - 2-channel and 4-channel monitors
- Single dimensionless number from 0 to 100
  - Uses the last 15 to 30 seconds of EEG, updated every second
  - May lag clinical change by about 5 to 10 seconds with abrupt changes (induction, rapid emergence)
- Reflects brain state, not drug concentration
  - Dose-response with volatile agents and IV hypnotics (propofol, midazolam), independent of agent, and correlates with clinical level of consciousness
  - Ketamine activates the EEG: BIS hard to interpret
  - Nitrous oxide at sedative concentrations (up to 70%) does not seem to change BIS; during surgery its antinociception may lower BIS
  - Opioids deepen sedation clinically without lowering BIS in unstimulated patients, so BIS misses opioid-hypnotic synergy; during surgery BIS does fall with opioids (less arousal from pain)
  - BIS cannot predict movement to surgical stimulus (a spinal reflex, not cortical)
- Children: algorithm built on adult EEG; the child EEG becomes adult-like by about 5 years; BIS may be valid over 1 year of age

### BIS values (lower = deeper hypnosis)
- Near 100: awake; responds to normal voice
- 65-85: light to moderate sedation; responds to loud voice or mild shaking
- 40-60: general anaesthesia (manufacturer's target)
  - BIS <60 is highly sensitive for unconsciousness
  - With little or no opioid or analgesic, extra volatile needed to stop movement to noxious stimuli gives lower values, commonly 25 to 35
- 20-40: deep hypnotic state
- 0-20: burst suppression
- 0: isoelectric EEG

### Monitor and sensor
- Display: BIS value or trend; single-channel EEG; facial EMG (decibels); signal quality index (SQI, interference from EMG)
- Forehead sensor: four numbered electrodes plus a smart chip; small tines part the outer skin and hydrogel makes contact, lowering impedance and improving signal
- Paediatric sensor: smaller, three electrodes, flexible to fit head size

### Sensor placement
- Clean forehead with alcohol and dry
- Sensor sits at an angle, like a salute
  - Electrode #1: centre of forehead, 1.5 inches (4cm) above the bridge of the nose, line pointing down the nose
  - Electrode #4: directly above the eyebrow
  - Electrode #2: between #1 and #4
  - Electrode #3: temple, between the outer canthus and the hairline
- Either side, except where it blocks surgical access, or after stroke (use the unaffected side)

### Factors affecting BIS
- EMG and neuromuscular blockers
  - High frontalis muscle tone may raise BIS; absent EMG does not mean the patient is asleep
  - Neuromuscular blockers reduce EMG and may lower BIS; with stable anaesthesia and no EMG artefact they have little or no effect
- Devices whose electrical artefact may raise BIS
  - Pacemakers
  - Forced-air warmers over the head
  - Surgical navigation systems (sinus surgery)
  - Endoscopic shavers (shoulder, sinus surgery)
  - Diathermy
- Conditions with low BIS (reduced cerebral metabolism or activity)
  - Cardiac arrest, hypovolaemia, hypotension
  - Cerebral ischaemia or hypoperfusion
  - Hypoglycaemia
  - Hypothermia below 33°C lowers BIS (e.g. cardiopulmonary bypass, where it reflects hypothermia plus drugs); BIS rises quickly on rewarming
- Pre-existing neurological disease: effect unknown; not enough data

## Sedline (Patient State Index, PSI)
- Masimo device; four channels of bilateral EEG from forehead electrodes
- Displays
  - 1. Patient State Index (PSI): related to depth
  - 2. Density spectral array: activity in both hemispheres
- Target PSI 25-50

## Entropy
- Measures the irregularity (disorder) of the EEG: high when awake, low in deep unconsciousness
- Forehead and side-of-head electrodes, as with BIS; Fourier transform of each epoch, squared to a normalised frequency spectrum
- State entropy (SE): below 32Hz, mainly EEG
- Response entropy (RE): up to 47Hz, includes frontalis EMG
- Shannon entropy normalises values from zero (total regularity) to 1 (total irregularity)
- GE M-entropy module rescales zero to 1 into zero to 100, non-linearly to give more resolution between 0.5 and 1.0
- RE ranges 100 to zero; SE ranges 91 to zero
- Zero = very deep; near 100 = awake; 40 and 60 bound the target range, as with BIS
  - At target depth SE and RE should be about equal
  - On waking the RE-SE gap widens as drug effect fades and frontalis EMG increases

## NARCOguide
- 3 channel EEG
- NARCOguide index (depth of anaesthesia) from 0 to 100

## Flashcards
- Q: What BIS range is the usual target for general anaesthesia?
  - A: 40-60
- Q: How much EEG data is each BIS value calculated from?
  - A: The last 15 to 30 seconds, updated every second
- Q: Below what temperature does hypothermia lower BIS?
  - A: Below 33°C
- Q: What is the target PSI with Sedline?
  - A: 25-50
- Q: How do state entropy and response entropy differ?
  - A: SE uses frequencies below 32Hz (EEG); RE goes up to 47Hz and includes frontalis EMG

<!-- related:start (generated) -->
## Related
- [Propofol](../drugs/propofol.md)
- [Anaesthesia for the Elderly and Frailty](../other/elderly-and-frailty.md)
- [Intraoperative analgesia and nociception monitoring](../procedures/intraoperative-analgesia.md)
- [Total intravenous anaesthesia (TIVA) and propofol TCI models](../procedures/total-intravenous-anaesthesia.md)
<!-- related:end -->
