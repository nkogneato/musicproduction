<script lang="ts">
  import Counter from "./lib/Counter.svelte";

  // Function to play a sound
  function playSound(sound: string) {  
    const audio = new Audio(`${import.meta.env.BASE_URL}sounds/${sound}.wav`);

    // Handle sound loading errors
    audio.onerror = () => alert(`Error loading sound: ${sound}`);
    
    // Play the sound
    audio.play();
  }
</script>

<main>
  <h1>Multiplayer Music Composer</h1>

  <div class="button-container">
    <button on:click={() => playSound('kick')}>Kick</button>
    <button on:click={() => playSound('snare')}>Snare</button>
    <button on:click={() => playSound('hihat')}>Hi-Hat</button>
  </div>

  <Counter /> <!-- ✅ Counter component is included -->
</main>

<style>
  main {
    text-align: center;
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .button-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }

  button {
    background-color: #1e1e1e;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s;
  }

  button:hover {
    background-color: #333;
    transform: scale(1.05);
  }
</style>
