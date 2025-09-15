import "/style.css";

document.querySelector("#app").innerHTML = `
<div class="h-full w-full relative">
    <div class="w-full h-[150px] grid grid-rows-[50%_50%] relative bg-[#fff]">
        <div class="w-[183px] h-[34px] mt-[24px] ml-[90px]">
            <img src="src/img/logo-test.png"/>
        </div>
    
        <div class="grid grid-cols-[50%_50%] items-center shadow-[0px_3px_14px_#00000029]">
            <h1 class="ml-[90px] font-bold text-[20px] font-[Lato] text-[#36578A]">Test psychotechnique pour permis de conduire à Montgeron</h1>
        </div>
    </div>

    <div class="w-full h-full mt-[53px]">
        <h1 class="ml-[90px] font-bold text-[18px] font-[Lato] text-[#383838]">Complétez votre réservation</h1>    
        <div class="flex ml-[90px] gap-[80px]">
            <div class="w-[440px]">
                <div class=" w-full rounded-2xl shadow-[0px_3px_6px_#00000029] overflow-hidden bg-white mt-[36px]">
                    <!-- Header -->
                    <div class="text-center px-6 py-4 bg-[#F2F3F5] shadow-[0px_3px_6px_#00000029]">
                        <h3 class="text-lg font-bold text-[#2C2C2C]">Basic</h3>
                        <p class="text-sm text-[#2C2C2C]">Votre test psychotechnique simple</p>
                    </div>

                    <!-- Price -->
                    <div class="text-center py-6">
                        <p class="text-[28px] font-bold text-[#2C2C2C]">+ 0€</p>
                        <p class="text-[10px] text-[#fff]">test</p>
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

             
            <div class="w-[440px]">
                <div class=" w-full rounded-2xl shadow-[0px_3px_6px_#00000029] overflow-hidden bg-[#0DBC0D] mt-[36px]">
                    <!-- Header -->
                    <div class="text-center px-6 py-4 bg-[#0DBC0D] shadow-[0px_3px_6px_#00000029]">
                        <h3 class="text-lg font-bold text-[#fff]">Assurance</h3>
                        <p class="text-sm text-[#fff]">Votre test psychotechnique sans stress</p>
                    </div>

                    <!-- Price -->
                    <div class="text-center py-6 bg-white ml-[2px] mr-[2px]">
                        <p class="text-[28px] font-bold text-[#2C2C2C]">+ 40€</p>
                        <p class="text-[10px] text-[#2C2C2C]">A peine le prix d'un resto</p>
                        <button class="mt-4 px-6 py-2 bg-[#0DBC0D] text-[#2C2C2C] font-semibold rounded-[8px] shadow text-white">
                        Sélectionner
                        </button>
                    </div>

                    <!-- Features -->
                    <div class="px-6 py-4 border-t space-y-3 text-sm text-[#7070702B] bg-white ml-[2px] mr-[2px] mb-[2px] rounded-b-2xl">
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

            <div class="w-[440px]">
                <div class=" w-full rounded-2xl shadow-[0px_3px_6px_#00000029] overflow-hidden bg-white mt-[36px]">
                    <!-- Header -->
                    <div class="text-center px-6 py-4 bg-[#36578A] shadow-[0px_3px_6px_#00000029]">
                        <h3 class="text-lg font-bold text-[#fff]">Basic</h3>
                        <p class="text-sm text-[#fff]">Votre test psychotechnique tout comprix</p>
                    </div>

                    <!-- Price -->
                    <div class="text-center py-6">
                        <p class="text-[28px] font-bold text-[#2C2C2C]">+ 60€</p>
                        <p class="text-[10px] text-[#2C2C2C]">A peine le prix de 4 pizzas</p>
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
    
  <div class="w-full h-[112px] bg-[#353535] absolute bottom-0">
    <div class="relative flex flex-col">
        <div class="w-[365px] h-[66px] bg-[#F2F3F5] ml-[90px] mt-[26px] rounded-[10px] flex items-center justify-center gap-4 absolute">
            <div class="flex self-center items-center gap-4">
                <img src="src/img/ico-calendar.png" alt="Checked" class="w-5 h-5"/>
                <div class="flex flex-col gap-0">
                    <span class="m-0 p-0 text-[15px] text-[#36578A]">Test psychotechnique le 28 mars à 14:00</span>
                    <span class="m-0 p-0 text-[12px] text-[#36578A]">15 rue de la république Montgeron 91230</span> 
                </div>       
            </div>
        </div>
        <div class="flex flex-col self-end mr-[108px] items-center p-4">
            <div class="flex items-center gap-[70px]">
                <p class='text-white'>Total</p>
                <span class='text-white text-[30px] font-bold ml-4'>135€</span>
            </div>    
            <button class="self-start bg-[#BF2A6B] w-[173px] h-[39px] text-white rounded-lg  flex items-center justify-center gap-2">
                Suivant
                <span class="text-xl">→</span>
            </button>
        </div>
    </div>
  </div>  
</div>
`;
