import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PasswordRecovery() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate sending recovery email
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-light" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#01424c" strokeWidth="1"/>
              </pattern>
              <pattern id="hexagons-light" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <polygon points="25,0 50,14.4 50,43.4 25,57.7 0,43.4 0,14.4" fill="none" stroke="#01424c" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-light)"/>
            <rect width="100%" height="100%" fill="url(#hexagons-light)"/>
          </svg>
        </div>
        
        {/* Subtle Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#01424c]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#b9aad4]/10 rounded-full blur-3xl" />
      </div>

      {/* Recovery Card */}
      <div className="w-full max-w-md animate-fade-in">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 space-y-8">
          {/* Logo & Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[#01424c] flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Restablecer Contraseña</h1>
              {!isSuccess && (
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  Ingresa tu correo corporativo para recibir las instrucciones de recuperación.
                </p>
              )}
            </div>
          </div>

          {isSuccess ? (
            /* Success State */
            <div className="text-center space-y-6 py-4">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-[#b2d5ad]/20 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-[#4a8c3f]" />
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-900">¡Correo enviado!</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Por favor, revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.
                </p>
              </div>
              <Link
                to="/auth"
                className="inline-flex items-center gap-2 text-[#01424c] hover:text-[#01424c]/80 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al Inicio de Sesión
              </Link>
            </div>
          ) : (
            /* Recovery Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="recovery-email" className="text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="recovery-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="usuario@kibernum.com"
                    className="pl-12 h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#01424c]/20 focus:border-[#01424c]/50 text-gray-900 placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-[#01424c] hover:bg-[#01424c]/90 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </div>
                ) : (
                  "Enviar Instrucciones"
                )}
              </Button>

              {/* Back to Login Link */}
              <div className="text-center">
                <Link
                  to="/auth"
                  className="inline-flex items-center gap-2 text-sm text-[#01424c] hover:text-[#01424c]/80 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver al Inicio de Sesión
                </Link>
              </div>
            </form>
          )}

          {/* Security Footer */}
          <div className="pt-4 border-t border-gray-100">
            <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-2">
              <Lock className="w-3 h-3" />
              Protegido por Kibernum IT Security
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} Kibernum. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
