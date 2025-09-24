<script setup>
import Quote from "./components/Quote.vue"
import ActionBar from "./components/ActionBar.vue"
import { ref, computed, onMounted } from "vue"

const quote = ref("")
const author = ref("")
const loaded = ref(false)
const quoteByAuthor = computed(() => `${quote.value}\nBy ${author.value}`)
const quoteToTweet = computed(() => encodeURIComponent(quoteByAuthor.value))

const getQuote = () => {
    loaded.value = false
    fetch("/api/quote")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error fetching the quote")
            }
            return response.json()
        })
        .then((data) => {
            quote.value = data.quote
            author.value = data.author
            loaded.value = true
        })
}

const sendTweet = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quoteToTweet.value}`)
}

const copyQuote = () => {
    navigator.clipboard.writeText(quoteByAuthor.value)
}

const readTextLoud = () => {
    const utterance = new SpeechSynthesisUtterance(quoteByAuthor.value)

    // Select a voice
    let voices = speechSynthesis.getVoices()
    voices = voices.filter((voice) => voice.lang === "en-US")
    utterance.voice = voices[0]

    speechSynthesis.speak(utterance)
}

onMounted(() => {
    getQuote()
})
</script>

<template>
    <div class="appContainer">
        <h1>Quote of the Day</h1>
        <Transition mode="out-in" :key="quote">
            <p class="loading" v-if="!loaded">
                hhh hhhhhhhhh hh hhhhhhhh hhhhhhhhh hhhhh hhhh hhh hhh. hh hhhh
                hh hhh'hh hhhhhhhh hhh'hh hhh hhh.
            </p>
            <Quote :quote="quote" :author="author" v-else />
        </Transition>
        <ActionBar
            :loading="!loaded"
            @send-tweet="sendTweet"
            @new-quote-request="getQuote"
            @copy-quote="copyQuote"
            @read-text-loud="readTextLoud"
        />
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: hsl(228, 83%, 63%);
    position: relative;
    font-family: "Poppins", sans-serif;
    width: 100vw;
    height: 100vh;
}

h1 {
    text-align: center;
}

.appContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: hsl(0, 0%, 96%);
    border-radius: 12px;
    padding: 1.5rem;
    width: 80%;
    max-width: 500px;
    transition: height 0.5s ease;
}

.loading {
    font-size: 1.2em;
    text-align: center;
    margin: 4rem 0;
    color: hsla(0, 0%, 100%, 0);
    text-shadow: 0px 0px 12px rgba(0, 0, 0, 1);
    user-select: none;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
