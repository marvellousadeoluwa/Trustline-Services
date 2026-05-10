# Advanced CSS Animations & Utilities
# Add these to app/globals.css for enhanced visual effects

## Quick Copy-Paste CSS for globals.css

/* ============= FLOATING & BOBBING ANIMATIONS ============= */
@keyframes float {
  0%, 100% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
}

@keyframes floatSlow {
  0%, 100% {
    transform: translateY(-20px) rotate(0deg);
  }
  50% {
    transform: translateY(20px) rotate(2deg);
  }
}

@keyframes bob {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* ============= ROTATING ANIMATIONS ============= */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinSlow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 51, 102, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(0, 51, 102, 0);
  }
}

/* ============= SHIMMER & GRADIENT ANIMATIONS ============= */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

@keyframes backgroundShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes gradientFlow {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* ============= BORDER ANIMATIONS ============= */
@keyframes borderGlow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(200, 154, 43, 0), inset 0 0 5px rgba(200, 154, 43, 0);
  }
  50% {
    box-shadow: 0 0 20px rgba(200, 154, 43, 0.5), inset 0 0 20px rgba(200, 154, 43, 0.2);
  }
}

@keyframes slideInBorder {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* ============= TEXT ANIMATIONS ============= */
@keyframes textGlow {
  0%, 100% {
    text-shadow: 0 0 5px transparent, 0 0 10px transparent;
  }
  50% {
    text-shadow: 0 0 5px rgba(0, 51, 102, 0.5), 0 0 10px rgba(200, 154, 43, 0.3);
  }
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blinkCursor {
  0%, 49% {
    border-right-color: rgba(0, 51, 102, 0.75);
  }
  50%, 100% {
    border-right-color: transparent;
  }
}

/* ============= SCALE ANIMATIONS ============= */
@keyframes scaleIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes scaleUp {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

/* ============= SLIDE ANIMATIONS ============= */
@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideLeft {
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideRight {
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* ============= FADE ANIMATIONS ============= */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/* ============= BOUNCE ANIMATIONS ============= */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes bounceSmall {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

/* ============= SHAKE ANIMATIONS ============= */
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
}

@keyframes wiggle {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-1deg);
  }
  75% {
    transform: rotate(1deg);
  }
}

/* ============= LOADING ANIMATIONS ============= */
@keyframes loading {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

@keyframes skeleton {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

/* ============= GLOW ANIMATIONS ============= */
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(0, 51, 102, 0.1), 0 0 10px rgba(200, 154, 43, 0.1);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 51, 102, 0.3), 0 0 30px rgba(200, 154, 43, 0.2);
  }
}

@keyframes glowText {
  0%, 100% {
    text-shadow: 0 0 10px rgba(0, 51, 102, 0.3);
  }
  50% {
    text-shadow: 0 0 20px rgba(0, 51, 102, 0.6), 0 0 30px rgba(200, 154, 43, 0.3);
  }
}

/* ============= ICON ANIMATIONS ============= */
@keyframes iconFloat {
  0%, 100% {
    transform: translateY(-8px);
  }
  50% {
    transform: translateY(4px);
  }
}

@keyframes iconPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* ============= PROGRESS ANIMATIONS ============= */
@keyframes fillProgress {
  from {
    width: 0;
    opacity: 1;
  }
  to {
    width: 100%;
    opacity: 1;
  }
}

@keyframes slideProgress {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* ============= GRADIENT ANIMATIONS ============= */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* ============= UTILITY CLASSES ============= */

/* Quick utility classes for animations */
.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-slow {
  animation: floatSlow 4s ease-in-out infinite;
}

.animate-bob {
  animation: bob 2s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spinSlow 3s linear infinite;
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-pulse-glow {
  animation: pulseGlow 2s infinite;
}

.animate-shimmer {
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

.animate-border-glow {
  animation: borderGlow 2s ease-in-out infinite;
}

.animate-text-glow {
  animation: textGlow 2s ease-in-out infinite;
}

.animate-bounce-sm {
  animation: bounceSmall 1s ease-in-out infinite;
}

.animate-shake {
  animation: shake 0.5s ease-in-out infinite;
}

.animate-wiggle {
  animation: wiggle 1s ease-in-out infinite;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

.animate-glow-text {
  animation: glowText 2s ease-in-out infinite;
}

.animate-icon-float {
  animation: iconFloat 3s ease-in-out infinite;
}

.animate-icon-pulse {
  animation: iconPulse 1.5s ease-in-out infinite;
}

.animate-fill-progress {
  animation: fillProgress 1s ease-in-out forwards;
}

.animate-slide-progress {
  animation: slideProgress 2s ease-in-out infinite;
}

/* ============= TRANSITION UTILITIES ============= */

.transition-smooth {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-smooth-fast {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-smooth-slow {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ============= HOVER EFFECTS ============= */

.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 51, 102, 0.15);
}

.hover-scale {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-scale:hover {
  transform: scale(1.05);
}

.hover-glow {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(0, 51, 102, 0.2), 0 0 30px rgba(200, 154, 43, 0.1);
}

.hover-rotate {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-rotate:hover {
  transform: rotate(5deg);
}

.hover-color-gold {
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-color-gold:hover {
  color: rgb(200, 154, 43);
}

/* ============= FOCUS RING UTILITIES ============= */

.focus-ring {
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: outline 0.3s;
}

.focus-ring:focus {
  outline: 2px solid rgb(0, 51, 102);
  outline-offset: 2px;
}

.focus-ring-gold {
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: outline 0.3s;
}

.focus-ring-gold:focus {
  outline: 2px solid rgb(200, 154, 43);
  outline-offset: 2px;
}

/* ============= BACKDROP ANIMATIONS ============= */

@keyframes backdropBlur {
  from {
    backdrop-filter: blur(0px);
  }
  to {
    backdrop-filter: blur(10px);
  }
}

.animate-backdrop-blur {
  animation: backdropBlur 0.5s ease-in-out forwards;
}

/* ============= PERFORMANCE OPTIMIZATION ============= */

/* Use will-change sparingly and remove after animation */
.will-animate-transform {
  will-change: transform;
}

.will-animate-opacity {
  will-change: opacity;
}

/* GPU acceleration hint */
.gpu-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* ============= RESPONSIVE ANIMATION ADJUSTMENTS ============= */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@media (max-width: 768px) {
  /* Reduce animation intensity on mobile */
  .animate-float {
    animation-duration: 4s;
  }

  .animate-pulse-glow {
    --tw-shadow: 0 0 0 0 rgba(0, 51, 102, 0.5);
  }
}

/* ============= DARK MODE SUPPORT (Optional) ============= */

@media (prefers-color-scheme: dark) {
  .animate-glow {
    animation: glow 2s ease-in-out infinite;
    box-shadow: 0 0 20px rgba(200, 154, 43, 0.3);
  }
}
