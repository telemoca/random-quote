<script setup>
const props = defineProps({
    quote: String,
    author: String,
})
</script>

<template>
    <div class="quoteContainer">
        <p class="quote">
            {{ props.quote }}
        </p>
        <p class="author">— {{ props.author }}</p>
    </div>
</template>

<style>
.quoteContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.quote {
    text-align: center;
    line-height: 1.2;
    font-size: 1.2em;
}

.quote::before {
    position: relative;
    top: 17px;
    vertical-align: 0.5em;
    content: "❝";
    font-size: 2em;
    margin-right: 0.5rem;
}

.quote::after {
    position: relative;
    top: 6px;
    vertical-align: -0.5em;
    content: "❞";
    font-size: 2em;
    margin-left: 0.5rem;
}

.author {
    font-style: italic;
    font-weight: 300;
    text-align: end;
    font-size: 1.2em;
}
</style>
