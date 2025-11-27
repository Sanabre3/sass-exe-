document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const phoneInput = document.getElementById('phone');
    
    // Máscara de telefone
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            value = value.replace(/(\d{0,2})/, '($1');
            
            if (value === '(') value = '';
        }
        
        e.target.value = value;
    });
    
    // Validação do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        
        let isValid = true;
        
        // Validar username
        if (username.length < 3) {
            showError('usernameError', 'Username deve ter pelo menos 3 caracteres');
            isValid = false;
        } else {
            clearError('usernameError');
        }
        
        // Validar telefone
        const phoneNumbers = phone.replace(/\D/g, '');
        if (phoneNumbers.length !== 11) {
            showError('phoneError', 'Telefone deve ter 11 dígitos');
            isValid = false;
        } else {
            clearError('phoneError');
        }
        
        // Validar senha
        if (password.length < 6) {
            showError('passwordError', 'Senha deve ter pelo menos 6 caracteres');
            isValid = false;
        } else {
            clearError('passwordError');
        }
        
        if (isValid) {
            alert('Login realizado com sucesso!');
        }
    });
    
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        const inputElement = errorElement.previousElementSibling;
        
        errorElement.textContent = message;
        inputElement.classList.add('error');
    }
    
    function clearError(elementId) {
        const errorElement = document.getElementById(elementId);
        const inputElement = errorElement.previousElementSibling;
        
        errorElement.textContent = '';
        inputElement.classList.remove('error');
    }
});