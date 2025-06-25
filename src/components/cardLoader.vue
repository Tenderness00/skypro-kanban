<template>
    <div class="loader-card">
        <div class="loader-container">
            <Loader />
            <Loader :width="164" />
        </div>
        <Loader :width="81" :heigth="15"  />
    </div>
   
</template>

<style>
.loader-card {
    width: 270px;
    height: 159px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    background-color: #d9d9d9;
    border: 1px solid #101010;
    border-radius: 24px;
}

.loader-container {
    display: flex;
    font-display: column;
    gap: 7px;
}
</style>
