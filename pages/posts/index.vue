<template>
    <div class="m-4 p-4 dark:bg-zirc-100">
        <div class="text-center pb-10 pt-5 md:max-w-xl md:mx-auto">
            <!-- <h1 class="text-3xl mb-3 mt-2 font-semibold tracking-normal text-white dark:text-black">
                Feladványok
            </h1> -->
            <h2 class="text-md font-primary font-black text-black dark:text-black">
                Minden feladványnál szükségetek lesz egy játékmesterre, a megoldást csak
                ő olvashatja el. A többiek ezután olyan kérdéseket tesznek fel neki,
                amelyekre IGEN-nel vagy NEM-mel tud a játékmester válaszolni. Ha eleinte
                a sötétben is tapogatóztok, jó logikával lépésről-lépésre eljuthattok a
                megoldásig.
                <br />
                <br />
                Amikor a játékmester úgy dönt, hogy valaki rájött a történet nyitjára,
                felolvassa a többieknek a megfejtést, felfedve a rejtély teljes
                megoldását.
            </h2>
        </div>

        <div
            class="md:mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6	justify-items-center">
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
        </div>
    </div>
</template>
