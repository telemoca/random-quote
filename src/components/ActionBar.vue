<script setup>
const props = defineProps({
    loading: Boolean,
})
const emits = defineEmits([
    "new-quote-request",
    "send-tweet",
    "copy-quote",
    "read-text-loud",
])

const newQuoteRequest = () => {
    emits("new-quote-request")
}

const sendTweet = () => {
    emits("send-tweet")
}

const copyQuote = () => {
    emits("copy-quote")
}

const readTextLoud = () => {
    emits("read-text-loud")
}
</script>

<template>
    <div class="actionsContainer">
        <div class="buttons">
            <button class="svgContainer" @click="readTextLoud" aria-label="read the quote">
                <svg
                    
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-volume-up-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"
                    />
                    <path
                        d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"
                    />
                    <path
                        d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"
                    />
                </svg>
            </button>
            <button class="svgContainer" @click="copyQuote" aria-label="copy the quote">
                <svg
                    
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-copy"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                    />
                </svg>
            </button>
            <button class="svgContainer" @click="sendTweet" aria-label="share the quote on X">
                <svg
                    
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                    />
                </svg>
            </button>
        </div>
        <button
            class="quoteBtn"
            @click="newQuoteRequest"
            :disabled="props.loading"
        >
            New Quote
        </button>
    </div>
</template>

<style>
.actionsContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgb(161, 161, 161);
    color: hsl(228, 83%, 63%);
    padding-top: 1rem;
    margin-top: 1rem;
}

.buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.svgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: 2px solid hsl(228, 83%, 63%);
    color: hsl(228, 83%, 63%);
    background-color: hsl(0, 0%, 96%);
    padding: 0.4em;
    margin: 0 0.2rem;
    width: 3em;
    height: 3em;
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s;
}

.svgContainer:hover {
    background-color: hsl(228, 83%, 63%);
    color: hsl(0, 0%, 96%);
}

.bi-volume-up-fill {
    transform: scale(1.1);
}

.quoteBtn {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    padding: 0.8em 1.2em;
    border: 2px solid hsl(228, 83%, 63%);
    background-color: hsl(228, 83%, 63%);
    color: hsl(0, 0%, 96%);
    border-radius: 25px;
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s;
}

.quoteBtn:hover {
    background-color: hsl(0, 0%, 96%);
    color: hsl(228, 83%, 63%);
}
</style>
