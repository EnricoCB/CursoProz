CREATE FUNCTION contar_clientes_cadastrados(data_pesquisa DATE)
RETURNS INTEGER AS $$
DECLARE
    total_clientes INTEGER;
BEGIN
    SELECT COUNT(*) INTO total_clientes
    FROM tabela_clientes
    WHERE data_cadastro = data_pesquisa;

    RETURN total_clientes;
END;
$$ LANGUAGE plpgsql;