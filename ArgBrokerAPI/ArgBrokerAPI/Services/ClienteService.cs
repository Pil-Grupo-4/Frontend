﻿using ArgBrokerAPI.Models.Entities;

namespace ArgBrokerAPI.Services
{
    public interface ClienteService
    {
        Task<decimal> GetDineroByClientId(int idCliente);
        Task<Cliente> RegisterNewClient(Cliente newCliente);
    }
}