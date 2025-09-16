import "/style.css";

const reservation = `
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
        <div class="flex w-screen gap-8 pl-[90px] pr-[90px]">
            <div class="flex-1">
                <div class=" w-full rounded-4xl shadow-[0px_3px_6px_#00000029] overflow-hidden bg-white mt-[36px]">
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
                            <input type="radio" name="payment" class="w-3 h-3 text-[#BF2A6B] focus:ring-[#BF2A6B]" />
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

             
            <div class="flex-1">
                <div class=" w-full rounded-4xl shadow-[0px_3px_6px_#00000029] overflow-hidden bg-[#0DBC0D] mt-[36px]">
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
                         <input type="radio" name="payment" class="w-3 h-3 text-[#BF2A6B] focus:ring-[#BF2A6B]" appearance-none/>
                        Sélectionner
                        </button>
                    </div>

                    <!-- Features -->
                    <div class="px-6 py-4 border-t space-y-3 text-sm text-[#7070702B] bg-white ml-[2px] mr-[2px] mb-[2px] rounded-b-4xl">
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

            <div class="flex-1">
                <div class=" w-full rounded-4xl shadow-[0px_3px_6px_#00000029] overflow-hidden bg-white mt-[36px]">
                    <!-- Header -->
                    <div class="text-center px-6 py-4 bg-[#36578A] shadow-[0px_3px_6px_#00000029]">
                        <h3 class="text-lg font-bold text-[#fff]">Complet</h3>
                        <p class="text-sm text-[#fff]">Votre test psychotechnique tout comprix</p>
                    </div>

                    <!-- Price -->
                    <div class="text-center py-6">
                        <p class="text-[28px] font-bold text-[#2C2C2C]">+ 60€</p>
                        <p class="text-[10px] text-[#2C2C2C]">A peine le prix de 4 pizzas</p>
                        <button class="mt-4 px-6 py-2 bg-[#36578A]  text-white font-semibold rounded-[8px] shadow">
                          <input type="radio" name="payment" class="w-3 h-3 text-[#BF2A6B] focus:ring-[#BF2A6B]" appearance-none/>
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
            <a href='rakotovaomilijaona-paiement' class="self-start bg-[#BF2A6B] w-[173px] h-[39px] text-white rounded-lg  flex items-center justify-center gap-2">
                Suivant
                <span class="text-xl">→</span>
            </a>
        </div>
    </div>
  </div>  
</div>
`;

const paiement = `
    <div class="h-full w-full relative">
        <div class="w-full h-[150px] grid grid-rows-[50%_50%] relative bg-[#fff]">
            <div class="w-[183px] h-[34px] mt-[24px] ml-[90px]">
                <img src="src/img/logo-test.png"/>
            </div>
        
            <div class="grid grid-cols-[50%_50%] items-center shadow-[0px_3px_14px_#00000029]">
                <h1 class="ml-[90px] font-bold text-[20px] font-[Lato] text-[#36578A]">Test psychotechnique pour permis de conduire à Montgeron</h1>
            </div>
        </div>
        <div class="w-full h-full mt-[39px] grid grid-cols-[48%_48%] gap-[4%]">
            <div id="left" class="flex flex-col ml-[90px] gap-[27px]">
                 <h1 class="font-bold text-[20px] font-[Lato] text-[#383838]">Confirmer et payer</h1>  
                 <div class="w-full flex items-center gap-4 rounded-lg  p-4 border border-[#EAEAEA]">
                    <img src="src/img/ico-trend.png" alt="Trend Icon" class="w-5 h-5" />
                    <div class="flex flex-col">
                        <span class="text-sm text-[#000]">Date de réservation en forte demande</span>
                        <span class="text-sm text-[#000]">Les réservations sont fréquentes pour ce centre</span>
                    </div>
                </div>
                <h1 class="font-bold text-[20px] font-[Lato] text-[#383838]">Vos informations personnelles</h1> 
                <div class="space-y-2 mt-[-25px] border-b pb-6 border-[#707070]">
                    <input 
                        type="text" 
                        placeholder="Nom Prénom" 
                        class="w-full h-[42px] p-3 text-[14px] bg-gray-100 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        class="w-full h-[42px] p-3 text-[14px] bg-gray-100 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="tel" 
                        placeholder="Numéro de téléphone" 
                        class="w-full h-[42px] p-3 text-[14px] bg-gray-100 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <h1 class="font-bold text-[20px] font-[Lato] text-[#383838]">Votre test psychotechnique</h1>  
                <div class="space-y-4 mt-[-25px] border-b pb-6 border-[#707070]">
                    <div class="flex items-center gap-2">
                        <img src="src/img/ico-date.png" alt="Date Icon" class="w-5 h-5" />
                        <div class="flex flex-col">
                            <span class="text-sm font-bold text-[#383838]">Date</span>
                            <span class="text-sm text-[#707070]">12 mai 2025</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <img src="src/img/ico-clock.png" alt="Time Icon" class="w-5 h-5" />
                        <div class="flex flex-col">
                            <span class="text-sm font-bold text-[#383838]">Horaire</span>
                            <span class="text-sm text-[#707070]">12:30</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <img src="src/img/ico-address.png" alt="Location Icon" class="w-6 h-6" />
                        <div class="flex flex-col">
                            <span class="text-sm font-bold text-[#383838]">Adresse</span>
                            <span class="text-sm text-[#707070]">39 Rue Emile Steiner, 27200 Vernon</span>
                        </div>
                    </div>
                </div> 
                <div class="space-y-6">
                    <!-- Titre -->
                    <h1 class="text-lg font-bold text-[#383838]">Choisissez votre moyen de paiement</h1>
                    <div class="flex items-end gap-1 mt-[-25px]">
                        <img src="src/img/ico-lock.png" alt="Secure Icon" class="w-4 h-6" />
                        <span class="text-[10px] text-[#383838]">100% SÉCURISÉ</span>
                    </div>

                    <!-- Options de paiement -->
                    <div class="space-y-4">
                        <label class="flex items-center gap-4 cursor-pointer border-b border-[#E2E2E2] pb-4">
                            <input type="radio" name="payment" class="w-3 h-3 text-[#BF2A6B] focus:ring-[#BF2A6B]" />
                            <img src="src/img/ico-cb.png" alt="Carte bancaire" class="w-12 h-6" />
                            <span class="text-sm text-[#383838]">Carte bancaire</span>
                        </label>
                        <label class="flex items-center gap-4 cursor-pointer border-b border-[#E2E2E2] pb-4">
                            <input type="radio" name="payment" class="w-3 h-3 text-[#BF2A6B] focus:ring-[#BF2A6B]" />
                            <img src="src/img/ico-applepay.png" alt="Apple Pay" class="w-12 h-6" />
                            <span class="text-sm text-[#383838]">Apple Pay</span>
                        </label>
                        <label class="flex items-center gap-4 cursor-pointer border-b border-[#E2E2E2] pb-4">
                            <input type="radio" name="payment" class="w-3 h-3 text-[#BF2A6B] focus:ring-[#BF2A6B]" />
                            <img src="src/img/ico-paypal.png" alt="Paypal" class="w-12 h-6" />
                            <span class="text-sm text-[#383838]">Paypal</span>
                        </label>
                        <label class="flex items-center gap-4 cursor-pointer border-b border-[#E2E2E2] pb-4">
                            <input type="radio" name="payment" class="w-3 h-3 text-[#BF2A6B] focus:ring-[#BF2A6B]" />
                            <img src="src/img/ico-alma.png" alt="Alma" class="w-12 h-6" />
                            <span class="text-sm text-[#383838]">Alma</span>
                        </label>
                    </div>

                    <!-- Bouton de réservation -->
                    <button class="w-full h-[36px] mb-4 py-3 bg-[#BF2B6B] text-white text-sm font-bold rounded-lg flex items-center justify-center gap-2">
                        Je réserve mon test psychotechnique
                        <span class="text-xl">→</span>
                    </button>
                </div>     
            </div>

            <div id="right " class="mr-[90px]">
                <div class="space-y-6 bg-white rounded-lg border border-[#EAEAEA] p-6">
                    <!-- Titre -->
                    <h1 class="text-lg font-bold text-[#BF2A6B]">Récapitulatif de votre test psychotechnique</h1>
    
                    <!-- Total à payer -->
                    <div>
                        <p class="text-sm text-[#383838]">Total à payer : <span class="text-xl font-bold text-[#383838]">130.00€</span></p>
                        <p class="text-xs text-[#707070] mt-2">
                            En passant votre commande, vous acceptez les conditions générales de vente de la société AAAEP. 
                            Veuillez consulter notre politique de protection des données.
                        </p>
                    </div>
                </div>
                 <!-- Features -->
                    <div class="flex justify-between items-center mt-6">
                        <!-- Entraînement -->
                        <div class="flex flex-col items-center">
                            <img src="src/img/ico-hand-green.png" alt="Entraînement Icon" class="w-12 h-13" />
                            <span class="text-sm font-bold text-[#383838] mt-2">Entraînement</span>
                            <span class="text-xs text-[#707070]">Gratuit Illimité</span>
                        </div>
                        <!-- Résultats -->
                        <div class="flex flex-col items-center">
                            <img src="src/img/ico-list.png" alt="Résultats Icon" class="w-12 h-12" />
                            <span class="text-sm font-bold text-[#383838] mt-2">Résultats</span>
                            <span class="text-xs text-[#707070]">le Jour Même</span>
                        </div>
                        <!-- Annulation -->
                        <div class="flex flex-col items-center">
                            <img src="src/img/ico-check-green.png" alt="Annulation Icon" class="w-12 h-12" />
                            <span class="text-sm font-bold text-[#383838] mt-2">Annulation</span>
                            <span class="text-xs text-[#707070]">Gratuite jusqu'à 48h</span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
`;
const app = document.querySelector("#app");
const loadPage = (page) => {
    app.innerHTML = page;
};

// Vérifier la route actuelle
const currentPath = window.location.pathname;

// Rediriger vers la route par défaut si aucune route n'est spécifiée
if (currentPath === "/") {
    window.history.replaceState(
        {},
        "",
        "/rakotovaomilijaona-completez-votre-reservation"
    );
    loadPage(reservation);
}

if (currentPath === "/rakotovaomilijaona-completez-votre-reservation") {
    loadPage(reservation);
} else {
    loadPage(paiement);
}
