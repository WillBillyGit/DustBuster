
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/background.jpg')",
      }
    }
  }
}

<div class="bg-custom-bg bg-cover bg-no-repeat">
   <!-- Your content -->
</div>


<!-- Background Container -->
<div class="relative min-h-screen w-full bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat">
  
  <!-- Optional Overlay (Adds a dark tint for better text contrast) -->
  <div class="absolute inset-0 bg-black/40"></div>

  <!-- Content -->
  <div class="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
    <h1 class="text-5xl font-bold mb-4 drop-shadow-lg">
      Welcome to CrustFund
    </h1>
    <p class="text-xl text-slate-200 max-w-md text-center">
      Building decentralized futures under the stars.
    </p>
  </div>
</div>
