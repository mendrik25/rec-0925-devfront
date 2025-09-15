import "/style.css";

document.querySelector("#app").innerHTML = `
<div class="bg-[#F2F3F5] h-screen w-screen">
    <div class="w-full h-[150px] grid grid-rows-[50%_50%] relative bg-white">
        <div class="w-[183px] h-[34px] mt-[24px] ml-[90px]">
            <img src="src/img/logo-test.png"/>
        </div>
    
        <div class="grid grid-cols-[50%_50%] items-center shadow-[0px_3px_14px_#00000029]">
            <h1 class="ml-[90px] font-bold text-[20px] font-[Lato] text-[#36578A]">Test psychotechnique pour permis de conduire à Montgeron</h1>
        </div>
    </div>

    <div class="w-full h-full mt-[53px]">
        <h1 class="ml-[90px] font-bold text-[18px] font-[Lato] text-[#383838]">Complétez votre réservation</h1>    
        <div class="flex ml-[90px] flex-wrap gap-[46px]">
            <div class="w-[450px]">
                <div class=" w-full rounded-2xl shadow-[0px_3px_6px_#00000029] overflow-hidden bg-white mt-[36px]">
                    <!-- Header -->
                    <div class="text-center px-6 py-4 bg-[#F2F3F5] shadow-[0px_3px_6px_#00000029]">
                        <h3 class="text-lg font-bold text-[#2C2C2C]">Basic</h3>
                        <p class="text-sm text-[#2C2C2C]">Votre test psychotechnique simple</p>
                    </div>

                    <!-- Price -->
                    <div class="text-center py-6">
                        <p class="text-[28px] font-bold text-[#2C2C2C]">+ 0€</p>
                        <button class="mt-4 px-6 py-2 bg-gray-100 text-gray-700 font-semibold rounded-[8px] shadow">
                        Sélectionner
                        </button>
                    </div>

                    <!-- Features -->
                    <div class="px-6 py-4 border-t space-y-3 text-sm text-[#7070702B]">
                        <div class="flex items-center gap-2">
                            <img src="src/img/ico-hand.png" alt="Checked" class="w-6 h-6"/>
                            <span class="text-[#2C2C2C]">Entraînement illimité et gratuit</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <img src="src/img/ico-cancel.png" alt="Checked" class="w-6 h-6"/>
                            <span class="text-[#2C2C2C]">Annulation jusqu'à 48 heures</span>
                        </div>
                    </div>
                </div>          
            </div>

             
            <div class="w-[450px]">
                <div class=" w-full rounded-2xl shadow-[0px_3px_6px_#00000029] overflow-hidden bg-white mt-[36px]">
                    <!-- Header -->
                    <div class="text-center px-6 py-4 bg-[#F2F3F5] shadow-[0px_3px_6px_#00000029]">
                        <h3 class="text-lg font-bold text-[#2C2C2C]">Basic</h3>
                        <p class="text-sm text-[#2C2C2C]">Votre test psychotechnique simple</p>
                    </div>

                    <!-- Price -->
                    <div class="text-center py-6">
                        <p class="text-[28px] font-bold text-[#2C2C2C]">+ 0€</p>
                        <button class="mt-4 px-6 py-2 bg-gray-100 text-gray-700 font-semibold rounded-[8px] shadow">
                        Sélectionner
                        </button>
                    </div>

                    <!-- Features -->
                    <div class="px-6 py-4 border-t space-y-3 text-sm text-[#7070702B]">
                        <div class="flex items-center gap-2">
                            <img src="src/img/ico-hand.png" alt="Checked" class="w-6 h-6"/>
                            <span class="text-[#2C2C2C]">Entraînement illimité et gratuit</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <img src="src/img/ico-cancel.png" alt="Checked" class="w-6 h-6"/>
                            <span class="text-[#2C2C2C]">Annulation jusqu'à 48 heures</span>
                        </div>
                    </div>
                </div>
           
            </div>

            <div class="w-[450px]">
                <div class=" w-full rounded-2xl shadow-[0px_3px_6px_#00000029] overflow-hidden bg-white mt-[36px]">
                    <!-- Header -->
                    <div class="text-center px-6 py-4 bg-[#36578A] shadow-[0px_3px_6px_#00000029]">
                        <h3 class="text-lg font-bold text-[#fff]">Basic</h3>
                        <p class="text-sm text-[#fff]">Votre test psychotechnique simple</p>
                    </div>

                    <!-- Price -->
                    <div class="text-center py-6">
                        <p class="text-[28px] font-bold text-[#2C2C2C]">+ 0€</p>
                        <button class="mt-4 px-6 py-2 bg-[#36578A]  text-white font-semibold rounded-[8px] shadow">
                        Sélectionner
                        </button>
                    </div>

                    <!-- Features -->
                    <div class="px-6 py-4 border-t space-y-3 text-sm text-[#7070702B]">
                        <div class="flex items-center gap-2">
                            <img src="src/img/ico-hand.png" alt="Checked" class="w-6 h-6" bg-[#36578A]/>
                            <span class="text-[#2C2C2C]">Entraînement illimité et gratuit</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <img src="src/img/ico-cancel.png" alt="Checked" class="w-6 h-6"/>
                            <span class="text-[#2C2C2C]">Annulation jusqu'à 48 heures</span>
                        </div>
                    </div>
                </div>
           
            </div>
          
        </div>
    </div> 
    </div>
</div>

`;
