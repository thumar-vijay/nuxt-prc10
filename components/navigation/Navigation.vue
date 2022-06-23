<template>
    <div class="navigation_bar">
        <nuxt-link to="/gallery">
            <transition name="fade" appear>
                <div v-if="false"> Welcome: {{ authUserName }}</div>
                <div v-else>The VueJS</div>
            </transition>
        </nuxt-link>

        <div class="navigation">

            <nav>
                <transition name="fade" appear mode="out-in">
                    <span v-if="true">
                        <nuxt-link to="/login">Login</nuxt-link>
                        <nuxt-link to="/signup">Signup</nuxt-link>
                    </span>
                    <span v-else>
                        <nuxt-link to="/gallery">Gallery</nuxt-link>
                    </span>
                </transition>
            </nav>
        </div>

        <div class="flex">
            <div>
                <transition name="fade" appear>
                    <span v-if="true" style="min-width: 120px; display: block" class="add_car">
                        <button
                            class="btn bg-blue-400 hover:bg-blue-500 hover:text-blue-600 text-blue-500 font-bold  px-4 rounded mr-2"
                            >
                            Add new car
                        </button>
                    </span>
                    <span v-else style="min-width: 120px; display: block">
                        &NonBreakingSpace;
                    </span>
                </transition>
            </div>

            <div>
                <transition name="fade" appear>
                    <button v-if="true" class="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold  px-4 rounded">
                        LogOut
                    </button>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #000;
}

.navigation_bar {
    min-width: 100%;
    background-color: rgb(84, 197, 241);
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: x-large;
    font-weight: 600;
    /* border-radius: 50px; */
    padding: 0 80px;
}

.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 10px;
}

.navigation a {
    color: rgb(141, 141, 141);
    text-decoration: none;
    margin-left: 20px;
}

.navigation a.nuxt-link-active {
    color: rgb(26, 26, 26);
    font-weight: bold;
}

.navigation a:hover {
    color: #000;
    font-weight: bold;
    text-decoration: none;
}

.another_buttons {
    color: rgb(141, 141, 141);
    text-decoration: none;
    margin-left: 20px;
}
</style>

<style>
* {
    box-sizing: border-box;
}
</style>
